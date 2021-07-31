import { ArticlesCodec, IArticlesResponse, NewArticle } from "./interfaces";
import * as E from "fp-ts/lib/Either";
import * as TE from "fp-ts/lib/TaskEither";
import * as T from "io-ts";
import { pipe } from "fp-ts/function";
import { PathReporter } from "io-ts/lib/PathReporter";
import { fold } from "fp-ts/lib/Either";

export class DecodeError extends Error {
  name = "DecodeError";
}

export class FetchError extends Error {
  name = "FetchError";
}

class FpFetch {

  static getJson<Codec extends T.Mixed>(codec: Codec) {
    return (uri: string) => {

      const request = pipe(
        TE.tryCatch(
          () =>
            fetch(uri).then(async res => {
              if (!res.ok) {
                throw new FetchError(`fetch failed with status: ${res.status}`);
              }
              const asn = await res.json();

              // asn.count = "10"

              return asn
            }),
          E.toError
        ),
        TE.chain(res => FpFetch.decode(res, codec)),
      )

      return request();
    };
  }

  static decode<Codec extends T.Mixed>(res: any, codec: Codec) {
    return pipe(
      TE.fromEither(codec.decode(res)),
      TE.mapLeft(FpFetch.decodeError)
    );
  }

  static decodeError(error: T.Errors): Error {
    return new DecodeError(PathReporter.report(E.left(error)).join("\n"));
  }

  static getText(uri: string): TE.TaskEither<Error, string> {
    return TE.tryCatch(
      () =>
        fetch(uri).then(res => {
          if (!res.ok) {
            throw new Error(`fetch failed with status: ${res.status}`);
          }
          return res.text();
        }),
      E.toError
    );
  }
}

export class ArticlesService {
  static async getByPage(page: number = 1): Promise<IArticlesResponse> {
    const uri = `http://localhost:3000/articles/page/${page}`;
    return fetch(uri).then(res => res.json());
  }

  static getByPageSafe = (page: number = 1): Promise<E.Either<Error, IArticlesResponse>> => {
    const uri = `http://localhost:3000/articles/page/${page}`;
    return FpFetch.getJson<typeof ArticlesCodec>(ArticlesCodec)(uri)
  };

  static async getArticleText(path: string): Promise<E.Either<Error, string>> {

    const uri = `http://localhost:3000/articles/file/${path}`;

    return pipe(
      FpFetch.getText(uri)
    )();
  }

  static async getArticleById(id: string): Promise<E.Either<Error, string>> {

    const uri = `http://localhost:3000/articles/get/${id}`;

    return pipe(
      FpFetch.getText(uri)
    )();
  }

  static async createArticle(article: NewArticle) {

    const body = new FormData();
    body.append("title", article.title);
    body.append("description", article.description);
    body.append("article", article.article[0]);

    const uri = "http://localhost:3000/articles/create";
    return fetch(uri, {
      method: "POST",
      body
    });
  }
}

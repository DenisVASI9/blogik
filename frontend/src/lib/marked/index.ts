import marked from "marked";
import hljs from "highlight.js";

marked.setOptions({
  highlight(code: string, language: string): string | void {
    return hljs.highlight(code, { language }).value;
  }
});

const renderer = {
  heading(text: string, level: number) {
    return `
            <h${level}>
              ${text}
            </h${level}>`;
  }
};

marked.use({ renderer });

export default marked;

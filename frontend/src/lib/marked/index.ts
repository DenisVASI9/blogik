import marked from "marked";
import hljs from "highlight.js";

marked.setOptions({
    highlight(code: string, language: string): string | void {
        return hljs.highlight(code, {language}).value;
    }
})

export default marked
function extract(content) {
    const text = document.getElementById("content").textContent;
    console.log(text);
    const pattern = /\((.+?)\)/g;
    let result = '';

    let match = pattern.exec(text);

    while (match != null) {
        result += match[1];
        result += '; ';
        match = pattern.exec(text);
    }
    return result;
}
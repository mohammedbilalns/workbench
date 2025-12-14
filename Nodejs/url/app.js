const parsed = new URL("https://example.com/a/b?ab=cd") // url object with props like pathname, basename searchparams   
const backtourl = url.format(parsed) // back to url string 
const base = "http://example.com"
const relative = "subpath"
const resolved = new URL(relative,base);
console.log(resolved.href)



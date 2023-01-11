class Books1 {
    constructor (name, pages, author, read) {
    this.name = name
    this.pages = pages
    this.author = author
    this.read = read
    this.info = function () {
        return(name + 'by' + author, pages, read)
    }
    }
}
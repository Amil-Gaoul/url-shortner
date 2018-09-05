export class ShortUrl {
    constructor(
        public originalUrl: string,
        public shortUrl: string,
        public urlCode: string,
        public updatedAt: string,
        public createdAt: string
    ) { }
}

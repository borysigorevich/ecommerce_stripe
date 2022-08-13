export type BannerType = {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    buttonText: string
    desc: string
    discount: string
    largeText1: string
    largeText2: string
    midText: string
    product: string
    saleTime: string
    smallText: string

    image: {
        _key: string
        _type: string
        asset: {
            _ref: string
            _type: string
        }
    }[]
}
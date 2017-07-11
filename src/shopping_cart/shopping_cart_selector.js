export default (state) => {
    const items = state.items.map(item => {
        return {
            ...item,
            canDecrement: item.count > 1,
            couponsApplied: state.coupons.filter(coupon => {
                if (coupon.to)
                    return item.id === coupon.to
                else
                    return true
            })
        }
    })

    const usedCoupons = state.coupons.filter(coupon => {
            if (coupon.to)
                return state.items.reduce((apply, item) => apply || item.id === coupon.to, false)
            else
                return true
        }
    )

    const bill = items.reduce((bill, item) => {
        const {id, count, price, couponsApplied} = item
        const {items, sum, total} = bill
        const newItem =  {
            id,
            count,
            price,
            couponsApplied,
            sum: count * price,
            finalSum: count * price * couponsApplied.reduce((composition, {discount}) => composition * discount, 1)
        }

        return {
            items: [
                ...items,
               newItem
            ],
            sum: sum + newItem.sum,
            total: total + newItem.finalSum
        }
    }, {items: [], total: 0, sum: 0})

    return {
        items,
        usedCoupons,
        bill
    }
}
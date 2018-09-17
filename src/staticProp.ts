class Coupon {
  static allowed = ["pepperoni", "margarita"]
  static create(percentage: number) {
    return `PIZZA_REST_${percentage}`
  }
}

console.log(Coupon.create(25));
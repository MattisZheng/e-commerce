# E-commerce Template

> E-commerce website build with React.

## Build with

- React
- Stripe.js
- Tailwind
- Jest

## Usage

## Installation

```bash
git clone https://github.com/MattisZheng/e-commerce.git
npm install
```

## Doc

### Logic flow

```mermaid
flowchart LR

check_user --> |user exist| check_cart
```

### UI flow

```mermaid
flowchart LR

app[App]
  header[Header]
  home[Home Page]
    swiper[Swiper]
    recommendation[Recommendation]
    category[Category]
    popular[Popular]
    sale[Sale]
  search[Search Page]
    result
  item[Item Page]
  footer[Footer]

app --> home & result & item
  home --> search & recommendation
  result --> sort & item
  item --> product
```

### Data flow

```mermaid
flowchart LR

user[User]
  accountInfo[Account Info]
  cart[Cart]

user --> accountInfo & cart
```

## Contribute guide

## License

## Dev log

v0.0.0

- [x] v0.01 Layout
- [x] v0.02 Nav
- [x] v0.03 API
- [x] v0.04 Product page
- [x] v0.05 Home page
- [x] v0.06 Search bar
  - [x] Recommendation
  - [x] Categories
- [x] v0.07 Search result page
  - [ ] Sort
    - [ ] Price
    - [ ] Popularity
    - [ ] Rating
  - [ ] Filter
  - [ ] Pagination
- [ ] v0.08 Routing
- [ ] v0.09 Cart
- [ ] v0.10 Unit Testing

v1.0.0 Main Site

- [ ] v1.1 Web
- [ ] v1.2 RWD
- [ ] v1.3 PWA

v2.0.0 Cross-platform

v3.0.0 Back-end

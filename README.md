## Mercantile

Mercantile is an eCommerce "bookstore". It is intended as a demonstration of development skill, 
and does not in fact sell books.

Currently, only the first stage has been completed, where the user can enter a search term, and the site will
retrieve and display data from the Google Books API for books matching that term. See the road map below for future
development plans.

Mercantile is built using React.js, React-Bootstrap, Django and Django REST Framework. 

## Architecture

![Mercantile Architecture](https://raw.githubusercontent.com/katemakescode/mercantile/main/docs/mercantile_architecture.png)

## Road Map

- [X] book search
- [ ] responsive design
- [ ] save books of interest using DRF
- [ ] addition of items to an in-memory shopping cart
- [ ] unit testing
- [ ] cart viewing, and dummy checkout handling
- [ ] order creaton  
- [ ] new customer creation, and order histories
- [ ] payment processing with Stripe
- [ ] emailing of invoices
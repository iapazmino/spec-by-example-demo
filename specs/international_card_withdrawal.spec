
# Money withdrawal with international Kushki card 

As a traveler that has a Kushki credit card,
I want to use my card when I’m abroad,
So that I don’t need to carry cash with me and feel more safe.

## Charge for international withdrawal

* Given a card holder outside their country with USD "5000" available credit
* And considering the following table for charges and fees
| Trxn Charge (USD) | ISD (%) |
|-------------------|---------|
|5                  |5        |
* When I withdraw
| Trxn | Amount (USD) | Note                                                       |
|------|--------------|------------------------------------------------------------|
|1     |500           |Amount plus charges and taxes smaller then available credit |
|2     |6000          |Amount bigger then available credit                         |
|3     |5000          |Amount ples charges and fees higer then available credit    |
* Then results in the following transactions table
| Trxn | Trxn Charge (USD) | ISD (USD) | Approved | Available credit (USD) |
|------|-------------------|-----------|----------|------------------------|
|1     |5                  |25         | Yes      |4470                    |
|2     |5                  |300        | No       |5000                    |
|3     |5                  |250        | No       |5000                    |

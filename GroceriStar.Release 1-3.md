Main Topics:
Ingredient Model
Item Model

Favorite  Attribute/Field
Purchased Attribute/Field


Ingredients

We should keep in mind, that later we'll need to add:
measurements (1L, 1lb, 300ml)
unit convertion(from gramm to kilogram)
ingredient calculations(1kg sugar + 1/4 kg sugar = 1.25kg of sugar)

Case: you have 1L of milk on your grocery list, when you add another 1L of milk again - as result you must have 1 row at list => 2L of milk

----

Another thing

Each GroceryList have Departments with ingredients collection.
user have ability to hide(but not delete) Department with all ingredients, related to this department.
I think this part should be improved too.

-------------

Ingredient model requirements
I want to store ingredient name/
For example = "milk". But whe should know, that "non-fat milk" - is a separated ingredient, for this moment.

---

Favourites
I think, this attribute is related to User Model and Ingredient Model (not Items)

maybe later when user goes to favourite list, pick an ingredeint -> he receive a list with purchases, that was previously made.


Items can be
purchased or unpurchased
Maybe we'll not save unpurchased items into payments history.



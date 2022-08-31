# My-Shoe-Closet

## Project Description
> General App Idea/Purpose<br />
Do you ever dream of having a massive walk-in closet just for your shoes? Ahhh...Me too, but living in a small NYC apartment makes it kind of impossible for me...until now! My shoe closet app will help users keep track of their shoe collection virtually. Users can add, edit, update, etc. their shoes and have them on display making it easier to pick out some cool kicks for any outfit.

> Models including field names and their datatypes<br />
I will be creating a shoe model which tracks the Brand, Name, Color, Category, Image, Price, and Comfort level. I will also create a users model which will allow users to enter a username and password.

> A list of routes <br />
Index (GET) = /mycloset – Shows all shoes in users closet<br />
New (GET)  =  /mycloset/new – Add a new shoe to collection (form)<br />
Create (POST)  = /mycloset – Create new shoe and display in closet (index page)<br />
Show (GET) = /mycloset/:id – Shows information for one shoe<br />
Edit (GET) = /mycloset/:id/edit – Edit information for one shoe (form)<br />
Update (POST) = /mycloset/:id – Update shoe information and redirect (show page)<br />
Destroy (DELETE) = /mycloset/:id – Delete a shoe from closet and redirect (index page)<br />

## Wireframes
> Wireframes with basic page layouts<br />
> Copy and paste or drag and drop your images here.
![Screen Shot 2022-08-20 at 1 26 04 PM](https://media.git.generalassemb.ly/user/43459/files/54ec8897-303d-4855-9641-e4f07dd1ce94)

![Screen Shot 2022-08-20 at 1 32 58 PM](https://media.git.generalassemb.ly/user/43459/files/4662ae7b-f312-4e54-8c19-c0411222d678)

![Screen Shot 2022-08-20 at 1 34 31 PM](https://media.git.generalassemb.ly/user/43459/files/12f3b6d4-75ba-4f94-af54-0aebb55f0050)


![Screen Shot 2022-08-20 at 1 30 10 PM](https://media.git.generalassemb.ly/user/43459/files/db5091c0-adab-43c8-a2ba-1bfc66314d1b)

![Screen Shot 2022-08-20 at 1 38 49 PM](https://media.git.generalassemb.ly/user/43459/files/0844eb71-966b-4b85-b747-2928d02fbd91)


## User Stories
> User stories detailing app functionality<br />
-  As a user, I want to be able to sign up for an account.
-  As a user, I want to be able to login with my username/password to get access to my shoe closet.
-  As a user, I want to be able to see a display of all my shoes.
- As a user, I want to be able to add, edit, update, and view my shoe collection.
- As a user, I want to easily navigate each page.

### MVP Goals
-	Full CRUD functionality that allows user to view, add, edit and update their shoe collection.

### Stretch Goals
-	User can search shoes via name or category/tags
-	User will see display of how many shoes are in their entire collection
-	User will be able to mark shoe as a favorite
-	User will have the ability to share their shoe collection with other users

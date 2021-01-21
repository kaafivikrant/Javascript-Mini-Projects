Download all the dependencies by 
-npm install

Start the server by 
-npm start

You are now on localhost:5000

now add /users in the URL
and you will see [] means empty database

Now lets add more data to the local database

Open postman in POST in " http://localhost:5000/users/ " and add the data

{
    "firstname": "Vikrant",
    "secondname": "Sharma",
    "age": 21
}

you will see "Vikrant added to the database"
now add as many data you want.

Now check the current data by on the browser as well as postman GET
by sending GET to " http://localhost:5000/users/ "

[
    {
        "firstname": "Vikrant",
        "secondname": "Kumari",
        "age": 21,
        "id": "9d7bf5c3-dd78-485e-9d94-5bd5933badbc"
    },
    {
        "firstname": "Gyan",
        "secondname": "Prakash",
        "age": 28,
        "id": "0dca9a6b-f6b6-4453-94eb-e7b3841e9654"
    }
]
I have added two entries

Now for getting the specific user copy and paste the specific Id generated with the data.
and send GET to " http://localhost:5000/users/877edb2e-0b09-490b-b802-e62c9c6bcb18 " for checking

where "877edb2e-0b09-490b-b802-e62c9c6bcb18" is the generated Id.

Now lets test the Delete operation 
Open DELETE in postman with " http://localhost:5000/users/877edb2e-0b09-490b-b802-e62c9c6bcb18 "
and now you get  User with 2658f932-d77e-44dd-916f-69e92b42e1b6 deleted means your data for this specific id is deleted

you can check by sending GET.


Now lets check the patch and edit the user with the specific Id.
send PATCH req in postman to " http://localhost:5000/users/877edb2e-0b09-490b-b802-e62c9c6bcb18 "
and edit json with the edits




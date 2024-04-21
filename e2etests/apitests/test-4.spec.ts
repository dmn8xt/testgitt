import { test, expect } from '@playwright/test';

let userid;
test('Get user', async ({ request }) => {
const response = await request.get('https://reqres.in/api/users?page2')
console.log(await response.json())
expect (response.status()).toBe(200)
});

test ('Create user', async({request}) => {

  const response = await request.post('https://reqres.in/api/users', {
    data:{
      "name":'george',
      'job':'trainer'
    },
    headers:{
      'Accept':'application/json'
    }
  });
  console.log(await response.json())
  expect(response.status()).toBe(201)


  let res = await response.json()
  userid = res.id

});


test ('Update user', async({request}) =>{
  const response = await request.put('https://reqres.in/api/users/'+userid, {
    data:{
      "name":'george',
      'job':'engineer'
    },
    headers:{
      'Accept':'application/json'
    }
  

  });
  console.log(await response.json())
  expect(response.status()).toBe(200)


})

test ('Delete user',async({request})=> {
  const response = await request.delete('https://reqres.in/api/users/'+userid)
  expect (response.status()).toBe(204)
})
let expect = require('chai').expect
Person = require("../../domain/person")

describe('Person', () => {
  let person
  let accountCreationEvent 

  beforeEach(() => {
    person = new Person('Linus Torvalds', new Date('1969-12-28'))
    account = { number: 123123 } 
    accountCreationEvent = { account: account}
  });

  describe('customer without account', () => {
    it('expect account to be a empty array', () => {
      expect(person.accounts).to.be.a('array');
      expect(person.accounts).to.have.lengthOf(0)
    });
  });

  describe('handleAccountCreation', () => {
    it('should add account to customer', () => {
      person.handleAccountCreation(accountCreationEvent)

      expect(person.accounts).to.have.lengthOf(1)
      expect(person.accounts[0].number).to.eq(account.number)
    });
  });

  describe('reverseAccountCreation', () => {
    it('should remove account from customer', ()=>{
      person.add_account(account)
      expect(person.accounts).to.have.lengthOf(1)
      
      person.reverseAccountCreation(accountCreationEvent)

      expect(person.accounts).to.have.lengthOf(0)
    })


    it('should remove the correct account from customer', ()=>{
      let otherAccount = { number: 9999 }
      person.add_account(account)
      person.add_account(otherAccount)
      expect(person.accounts).to.have.lengthOf(2)
      
      person.reverseAccountCreation(accountCreationEvent)

      expect(person.accounts).to.have.lengthOf(1)
      expect(person.accounts[0]).to.eq(otherAccount)
    })


  });

});


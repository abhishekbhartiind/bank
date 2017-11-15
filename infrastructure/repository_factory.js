const PersonRepository = require('./person_repository')
const TestPersonRepository = require('./test_person_repository')

const ENVS_USING_MEMORY_DB = ['test', 'development']

class RepositoryFactory {
  
  static personRepository(env = process.env.NODE_ENV) {
    if (ENVS_USING_MEMORY_DB.includes(env.toLowerCase())) {
      return new TestPersonRepository()
    }
    return new PersonRepository()
  }
}
module.exports = RepositoryFactory
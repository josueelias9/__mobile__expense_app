import BaseModal from '../baseComponents/BaseModal'
const NewScreen = () => (
  <>
    <BaseModal buttonName={'Add expense'} labelOne={'Item name'} labelTwo={'Price'} />{' '}
    <BaseModal
      buttonName={'Add income'}
      labelOne={'Short description'}
      labelTwo={'Long description'}
    />{' '}
  </>
)

export default NewScreen

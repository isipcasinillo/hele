import React , {useState } from 'react'

const BottleForm = () => {
    const [formState, setFormState] = useState({
        bottleName: '',
        bottleDate: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target.value)
        setFormState({
          ...formState,
          [name]: value,
        });
      };
  return (
      <>
        <div>BottleForm</div>
        <form>
            <input
            placeholder="How much Ounce"
            name="bottleName"
            type="text"
            value={formState.bottleName}
            onChange={handleChange}
            />
        </form>
    </>
  )
}

export default BottleForm;
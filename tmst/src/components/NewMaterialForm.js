import React from 'react'
import { useState,useEffect } from 'react'
import { Button, Image, Form,Input,Message } from 'semantic-ui-react'
import { Redirect,useParams } from "react-router-dom";

const NewMaterialForm = ({addNewMaterial,updateMaterial,loading,errorText,done,material,gotMaterial}) => {
  const params = useParams() 
  const _id = material ? material.id : params.id;
    const[name,setName]=useState(material ? material.name : '');
    const[error,setError]=useState({});
    const [submitStatus, setSubmitStatus] = useState(false);

    useEffect(() => {
      if (!material && gotMaterial && gotMaterial.name) {
        setName(gotMaterial.name);
      }
    }, [gotMaterial]);

    const onFormSubmit = () => {
      const errMessages = {};
      if (!name) {
        errMessages.name = "Name can't be blank.";
      }

      setError(errMessages);
      if (Object.keys(errMessages).length === 0) {
        if (!_id) {
          addNewMaterial({ name });
        }
        else{
          updateMaterial({ _id,name });
        }
        setSubmitStatus(true);
      }
    };
const formData=  <Form onSubmit={onFormSubmit} loading={loading}>
<Form.Field
  control={Input}
  label="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Name"
  error={error.name && { content: error.name }}
/>


<Button primary type="submit">
  Submit
</Button>
{          
errorText && errorText.response &&
<Message negative>
<Message.Header>
  {errorText.response.statusText}
</Message.Header>
</Message>
}

</Form>

   console.log("kkk",done , submitStatus)
    return (
    
        <div>
          {done && submitStatus ? <Redirect to="/malzemeler"/> : formData}
        </div>

     
    );
}

export default NewMaterialForm
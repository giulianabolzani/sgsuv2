import { useEffect, useState } from 'react';
import Input from '../../form/Input';
import Styles from '../../form/StudentsForm.module.css';

function EditStudentsForm({handleSubmit, studentData, btnText}){
  const [student, setStudent] = useState(studentData || {}) 

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(student)
  }

  function handleChange(e){
    setStudent({...student, [e.target.name]: e.target.value})
    console.log(student)
  }

  return(
    <form onSubmit={submit} className={Styles.form_container}>
      <Input
        text="Nome"
        type="text"
        name="nome"
        placeholder="Digite o nome do aluno"
        handleOnChange={handleChange}
        value={studentData.nome}
      />
      <Input
        text="Data de nascimento"
        type="date"
        name="age"
        placeholder="Informe a data de nascimento"
        handleOnChange={handleChange}
        value={studentData.age}
      />
      <Input
        text="Classe"
        type="text"
        name="classe"
        placeholder="Informe a Classe do Aluno"
        handleOnChange={handleChange}
        value={studentData.classe}
      />
      <Input
        text="Endereço"
        type="text"
        name="address"
        placeholder="Informe o Endereço do Aluno"
        handleOnChange={handleChange}
        value={studentData.address}
      />
      <div className={Styles.submit}>
        <input type="submit" value={btnText} />
      </div>
    </form>
  )
}

export default EditStudentsForm;
import { useEffect, useState } from 'react';
import Input from './Input';
import api from '../../utils/api';
import Styles from './StudentsForm.module.css';
import Select from './Select';

function StudentsForm({ handleSubmit, studentData, btnText }) {
  const [materials, setMaterials] = useState([])
  const [student, setStudent] = useState(studentData || {})
  const [token] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    api.get('/materials', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setMaterials(response.data.materials)
      })
  }, [token])


  const submit = (e) => {
    e.preventDefault()
    handleSubmit(student)
  }

  function handleChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value })
    console.log(student)
  }

  function handleSelect(e){
    setStudent({...student, 
      materials: {
        id: e.target.value,
        nome: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={Styles.form_container}>
      <div className={Styles.input_one}>
        <Input
          text="Nome"
          type="text"
          name="nome"
          placeholder="Digite o nome do aluno"
          handleOnChange={handleChange}
          value={student.nome}
        />
        <Input
          text="Nome do Resposável"
          type="text"
          name="responsible_name"
          placeholder="Informe o nome do Responsável pelo Aluno"
          handleOnChange={handleChange}
          value={student.responsible_name}
        />
      </div>
      <div className={Styles.input_two}>
        <Input
          text="Classe"
          type="text"
          name="classe"
          placeholder="Informe a Classe do Aluno"
          handleOnChange={handleChange}
          value={student.classe}
        />
        <Input
          text="Data de nascimento"
          type="date"
          name="age"
          placeholder="Informe a data de nascimento"
          handleOnChange={handleChange}
          value={student.age}
        />
        <Input
          text="Telefone do Resposável"
          type="text"
          name="responsible_phone"
          placeholder="Informe o Telefone do Responsável"
          handleOnChange={handleChange}
          value={student.responsible_phone}
        />
      </div>
      <div className={Styles.input_three}>
        <Input
          text="Endereço"
          type="text"
          name="address"
          placeholder="Informe o Endereço do Aluno"
          handleOnChange={handleChange}
          value={student.address}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Informe o Telefone do Aluno"
          handleOnChange={handleChange}
          value={student.phone}
        />
      </div>
      <div>
        <Select 
          name="materials"
          text="Selecione o material"
          options={materials}
          handleOnChange={handleSelect}
          value={student.materials ? student.materials.nome : ''}
        />
      </div>
      <div className={Styles.submit}>
        <input type="submit" value={btnText} />
      </div>
    </form>
  )
}

export default StudentsForm;
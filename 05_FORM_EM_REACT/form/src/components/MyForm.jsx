import styles from './MyForm.module.css'
import { useState } from 'react'

const MyForm = ({ user }) => {
  // 6 - Controlled inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")
  const [bio, setBio] = useState(user ? user.bio : "")
  const [role, setRole] = useState(user ? user.role : "")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando o formulário')
    console.log(name, email, bio, role)

    // 7 - Limpar Forms
    setName("")
    setEmail("")
    setBio("")
  }

  return (
    // 1 - criação de form 
    <div className={styles.form_container}>

      {/* 5 - envio de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            required
            type="text"
            name="name"
            placeholder="Digite seu nome..."
            className={styles.input}
            onChange={handleName}
            value={name}
          />
        </div>

        {/* 2 -Label envolvendo o input */}
        <label>
          <span>Email: </span>

          {/* 4 - Simplificação de manipulação de State */}
          <input
            required
            type="email"
            name='email'
            placeholder='Digite seu e-mail...'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

        </label>

        {/* 8 - Textarea */}
        <label>
          <span>Bio</span>
          <textarea
            name="bio"
            placeholder='Escreva aqu sua bio...'
            onChange={(e) => setBio(e.target.value)}
            value={bio}>
          </textarea>
        </label>

        {/* 9 - Select */}
        <label>
          <span>Você é oque?</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="Empregado">Empregado</option>
            <option value="Desempregado">Desempregado</option>
            <option value="Estudante">Estudante</option>
            <option value="Estudante">Estudante Empregado</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
import todoLogo from "../../assets/Logo.png";

import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="" />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
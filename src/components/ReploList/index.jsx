import { useEffect, useState } from "react";
import styles from './ReplosList.module.css';
const ReploList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson)
            }, 3000);
            
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li className={styles.listItem} key={repositorio.id}> <br/>
                        <div className={styles.itemName}>
                            <b>Nome:</b>{repositorio.name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b>{repositorio.language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Vistar no GitHub</a>
                    </li>
                ))}
                <li>Repositorio</li>
            </ul>
            )}
            
        </div>
        
    )
}

export default ReploList;
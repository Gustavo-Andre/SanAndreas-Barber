import Firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import  {useState, useEffect} from 'react';

export function videoAula(){

    useEffect(() =>{
        Firebase.firestore().collection('modulo-01').orderBy('nome', 'desc').onSnapshot(snapshot=>{
          setModulo(snapshot.docs.map(function(doc){
            return {info:doc.data()}
          }));
        })
      },[])

      const [modulo, setModulo] = useState([]);




    {
        modulo.map((val, index)=>{
            const modulo01 = ()=>{[
                {
                    nomeModulo:`${val.info.nome}`,
                    nomeAula:`${val.info.video}`,
                } 
            ]};

            const nomeModulo = `${val.info.nome}`
            const aula = `${val.info.video}`
        });
      };
};
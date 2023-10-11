'use client';
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { Form } from "@/app/components/Form";
import { Loading } from "@/app/components/Loading";
import { User, Lock } from"@phosphor-icons/react";
import { api } from "./Api";
import { USer } from "./utils/types";

export default function Home() {
  const { push } = useRouter();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [signing, setSigning] = useState(false);
  const [user, setUser] = useState<USer>({
    nome: 'Paula Henriques',
    senha: 'ph1234'
  });

  async function onSubmitForm(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('/showUser');
    setUser(response.data);

    console.log(user);

    if(name === user?.nome && password === user?.senha) {
      setSigning(true); 
      push('/new');
    }else{
      alert("username ou password errada");
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form 
        onSubmit={onSubmitForm}
        className="w-full max-w-md transform overflow-hidden rounded-lg bg-white flex flex-col gap-8 py-10 px-8 text-left align-middle shadow-xl"
      >
       <div className="w-full text-2xl font-semibold leading-6 text-gray-900">
          <h3>Login</h3>
        </div>
        <Form.InputIcon
          icon={<User />} 
          placeholder="Nome de usuário"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Form.InputIcon
          icon={<Lock />} 
          placeholder="Palavra-passe"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.ButtonSubmit 
          login={true}
          type="submit" 
          disabled={signing}
        >
          { signing ? <Loading /> :"Entrar" }
        </Form.ButtonSubmit>
       </form>
    </div>
  );
}
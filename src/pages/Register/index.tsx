import { Link } from "react-router-dom";
import { FormStyle } from "../Register/Styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Error from "../../components/Help/index";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";

function Register() {
    return (
        <div className=" bg-bege-100">
            <Header />
            <div>
                <p className="mt-10 mb-7 text-center font-semibold text-h3">
                    Preencha as informações abaixo
                </p>
                <FormStyle>
                    <div style={{ marginTop: 0 }}>
                        <Input
                            type="text"
                            placeholder="Seu nome"
                            name="nome"
                        />
                    </div>
                    <div style={{ marginTop: 0 }}>
                        <Input
                            type="email"
                            placeholder="Seu melhor email"
                            name="email"
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            placeholder="Crie uma senha"
                            name="senha"
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Insira um telefone"
                            name="telefone"
                        />
                    </div>
                    <Button type="submit" className="mb-5">
                        Cadastrar
                    </Button>
                    <Error error={null} />
                </FormStyle>

                <div>
                    <p className="mt-5 mb-20 text-center text-white">
                        Já possui conta? <br />{" "}
                        <Link className="text-blue-500" style={{ color: '#7BA1F6' }} to="/login">
                            <b>Faça login</b>
                        </Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;

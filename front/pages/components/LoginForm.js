import React, { useCallback, useState, useMemo } from "react";
import { Button, Form, Input } from "antd";
import Link from 'next/link';
import styled from 'styled-components';
import { PropTypes } from "prop-types";
import useInput from "../hooks/useInput";

const ButtonWrapper = styled.div`
    margin-top: 10px
`;

const FormWrapper = styled(Form)`
    padding: 10px
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e)=> {
    //     setId(e.target.value);
    // }, []);

    // const [password, setPassword] = useState('');
    // const onChangePassword = useCallback((e)=> {
    //     setPassword(e.target.value);
    // }, []);

    const style = useMemo(()=> ({marginTop:10}), []);

    const onSubmitForm = useCallback (() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password])


    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">패스워드</label>
                <br/>
                <Input 
                    name="user-password" 
                    type="password"
                    value={password} 
                    onChange={onChangePassword} 
                    required 
                />
            </div>
            <ButtonWrapper style={style}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
            <div>

            </div>
        </FormWrapper>
    );
}

LoginForm.protoTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
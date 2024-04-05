const elem = require('./elements').ELEMENTS;

class pessoas{
    verificarTitulo(){
        cy.get(elem.titulo).should('have.text', 'Pessoa');
    }
    acessarPage(){
        cy.visit('/pessoa');
    }
    clicarNoBotaoNovo(){
        cy.get(elem.btn_novo).click();
    }
    preencherDadosGerais(){
        cy.get(elem.input_nome).type('Mariane e Mariah Assessoria Jurídica Ltda', { force: true });
        cy.get(elem.input_cpf).type('17450441000198', { force: true });
        cy.get(elem.input_cep).type('13301-639', { force: true });
        cy.get(elem.input_logradouro).type('Praça das Avencas', { force: true });
        cy.get(elem.input_numero).type('682', { force: true });
        cy.get(elem.input_bairro).type('Condomínio Portal de Itu', { force: true });
        cy.get(elem.input_cidade).type('Itu', { force: true });

        cy.get(elem.combo_estado).click();
        cy.contains('span', 'SP - São Paulo').click();
        cy.get(elem.input_email).type('juridico@marianeemariahassessoriajuridicaltda.com.br', { force: true });
        cy.get(elem.input_site).type('www.marianeemariahassessoriajuridicaltda.com.br', { force: true });
        cy.get(elem.input_telefone).type('1136242701', { force: true });
        cy.get(elem.combo_prestacao).click();
        cy.contains('span', 'Cetip').click();

    }

    salvarCadastro(){
        cy.get(elem.btn_salvar).click();
    }

    confirmacaoCadastroComSucesso(){
        cy.contains('div', 'Cadastrado efetuado Sucesso!').should('be.visible');
    }

    confirmacaoEdicaoComSucesso(){
        cy.contains('div', 'Cadastrado efetuado Sucesso!').should('be.visible');
        // alterar
    }
    confirmacaoExclusaoComSucesso(){
        cy.contains('div', 'Cadastrado efetuado Sucesso!').should('be.visible');
        // alterar
    }

    acessarCadastroPrestadores(){
        cy.get(elem.btn_adicionarPrestador);
    }
    preencherPrestador(){   
        cy.get(elem.input_nomePrestador).type('Jessica', { force: true });
        cy.get(elem.input_emailPrestador)
          .type('jessica@gmail.com', { force: true });
        cy.get(elem.input_contatoPrestador)
          .type('11999946374', { force: true });
        cy.get(elem.input_cpfPrestador)
          .type('423.190.370-04', { force: true });
    
        cy.get(elem.checkSwitch_responsavel).find('[type="checkbox"]').check({ force: true });
    }

    salvarPrestador(){
        cy.get(elem.btn_salvarPrestador).contains('span', 'Salvar').click();
    }


    clicarNoBotaoEditarPessoa(){
        cy.get(elem.getEditarPessoaSelector(0));
    }


}
export default new pessoas();
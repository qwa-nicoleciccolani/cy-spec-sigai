export const ELEMENTS = {
    titulo: '.route-bar-breadcrumb > :nth-child(3)',
    btn_novo: '.my-2 > .p-element', 
    input_nome: '#nome', 
    input_cpf: '#p-tabpanel-0 > app-dados-gerais-pessoa > div > div:nth-child(2) > app-form-field > div > span > input', 
    input_cep: '#cep', 
    input_logradouro: '#logradouro',
    input_numero: '#numero', 
    input_bairro: '#bairro',
    input_cidade: '#cidade', 
    combo_estado: '#p-tabpanel-0 > app-dados-gerais-pessoa > div > div:nth-child(9) > span > p-dropdown > div',
    input_email: '#email', 
    input_site: '#site', 
    input_telefone: '#p-tabpanel-0 > app-dados-gerais-pessoa > div > div:nth-child(12) > span > input',
    combo_prestacao: '#p-tabpanel-0 > app-dados-gerais-pessoa > div > div:nth-child(13) > app-form-field > div > span > p-dropdown > div', 
    combo_status: '#pr_id_10_label',
    btn_adicionarPrestador: '#pr_id_11 > div.p-datatable-header.ng-star-inserted > div.flex.table-header.my-2.ng-star-inserted > button:nth-child(1)',
    btn_removerPrestador: '#pr_id_11 > div.p-datatable-header.ng-star-inserted > div.flex.table-header.my-2.ng-star-inserted > button:nth-child(2)', 
    btn_adicionarDadosBancarios: '#pr_id_13 > div.p-datatable-header.ng-star-inserted > div.flex.table-header.my-2.ng-star-inserted > button:nth-child(1)',
    btn_removerDadosBancarios: '#pr_id_13 > div.p-datatable-header.ng-star-inserted > div.flex.table-header.my-2.ng-star-inserted > button:nth-child(2)', 
    btn_uploadNovoArquivo: '#pr_id_13 > div.p-datatable-header.ng-star-inserted > div.flex.table-header.my-2.ng-star-inserted > button:nth-child(2)', 
    btn_salvar: 'body > app-root > div > app-main > div > div.layout-main > div > app-pessoa > div > p-toolbar > div > div > div > button.p-element.mr-2.p-button.p-component',
    btn_cancelar: 'body > app-root > div > app-main > div > div.layout-main > div > app-pessoa > div > p-toolbar > div > div > div > button.p-element.p-button-outlined.p-button.p-component',
    getEditarPessoaSelector: (index) => {
        return ` #pr_id_7-table > tbody > tr:nth-child(${index}) > td:nth-child(4) > button:nth-child(1)`;
      },
    getExcluirPessoaSelector: (index) => {
        return `#pr_id_19-table > tbody > tr:nth-child(${index}) > td:nth-child(4) > button:nth-child(2)`;
    },
    input_nomePrestador:'#nome',
    input_cpfPrestador: '#cpf',
    input_contatoPrestador:'#contato',
    input_emailPrestador: '#email', 
    checkSwitch_responsavel: '#p-tabpanel-0 > app-dados-gerais-pessoa > div > p-dialog > div > div > div.ng-tns-c56-42.p-dialog-content > div > div:nth-child(5) > table > tr > td:nth-child(1) > p-inputswitch',
    btn_salvarPrestador: '#p-tabpanel-0 > app-dados-gerais-pessoa > div > p-dialog > div > div > div.p-dialog-footer.ng-tns-c56-42.ng-star-inserted > button:nth-child(2)',
}
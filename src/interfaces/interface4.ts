interface Especificacao{
    marca: string
    modelo: string
    placadevideo: string
    memoria: string
    processador: string
    armazenamento: string
    [extra: string]: string | number | boolean 
}

let Computer: Especificacao = {
    marca: 'Dell',
    modelo: 'Inspiron 15 3000',
    placadevideo: 'Intel UHD Graphics 620',
    memoria: '8 GB',
    processador: 'Intel Core i5',
    armazenamento: '256 GB SSD',
    bluetooth: true,
    hdmi: true,
};
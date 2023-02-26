
import html2canvas from 'html2canvas';

// Input [
//     {id: 3, nombre: Alan, apellido_paterno: Beltrán, apellido_materno: Mendoza, email: sevilbm94@hotmail.com, telefono: 5555555555, gasto_token: 4 },
//     {id: 3, nombre: Alan, apellido_paterno: Beltrán, apellido_materno: Mendoza, email: sevilbm94@hotmail.com, telefono: 5555555555, gasto_token: 4 }
// ]

// headers [["id", "nombre", "apellido_paterno", "apellido_materno", "email", "telefono", "gasto_token"]]

// values [["2", "Alan", "Beltrán", "Mendoza", "sevilbm94@hotmail.com", "555555555", "2"]]

const exportPDF = (data, title, dataTableId) => {
    /*
    html2canvas(document.getElementById(dataTableId)).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('download.pdf');
    });
    */

    // const headers = [[...data.map((element) => Object.keys(element))[0]]];
    // const values = data.map((element) => Object.values(element));
    // console.log('data', data);
    // console.log('headers', headers);
    // console.log('values', values);

    // const unit = 'pt';
    // const size = 'A2'; // Use A1, A2, A3 or A4
    // const orientation = 'portrait'; // portrait or landscape

    // const marginLeft = 40;
    // const doc = new jsPDF(orientation, unit, size);

    // doc.setFontSize(15);

    // const body = data.map((element, index) => {
    //     const elementsInfo = [...values[index]];
    //     return elementsInfo;
    // });

    // let content = {
    //     startY: 50,
    //     head: headers,
    //     body,
    // };

    // doc.text(title, marginLeft, 40);
    // doc.autoTable(content);
    // doc.save(`${title}.pdf`);
};

export default exportPDF;
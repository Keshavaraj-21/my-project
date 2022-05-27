import { Component } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

class Product {
  name!: string;
  price!: number;
  qty!: number;
}
class Invoice {
  customerName!: string;
  address!: string;
  contactNo!: number;
  email!: string;

  products: Product[] = [];
  additionalDetails!: string;

  constructor() {
    // Initially one empty product row we will show
    this.products.push(new Product());
  }
}

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent {
  invoice = new Invoice();

  generatePDF(action = 'open') {
    let docDefinition = {
      content: [
        {
          text: 'KR HOUSING SOCIETY',
          fontSize: 16,
          alignment: 'center',
          color: '#047886',
        },
        {
          text: 'Your Invoice',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue',
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader',
        },
        {
          columns: [
            [
              {
                text: this.invoice.customerName,
                bold: true,
              },
              { text: this.invoice.address },
              { text: this.invoice.email },
              { text: this.invoice.contactNo },
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right',
              },
              {
                text: `Bill No : ${(Math.random() * 1000).toFixed(0)}`,
                alignment: 'right',
              },
            ],
          ],
        },
        {
          text: 'Order Details',
          style: 'sectionHeader',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Name of charges', 'Cost', 'Number of months', 'Amount'],
              ...this.invoice.products.map((p) => [
                p.name,
                p.price,
                p.qty,
                (p.price * p.qty).toFixed(2),
              ]),
              [
                { text: 'Total Amount', colSpan: 3 },
                {},
                {},
                this.invoice.products
                  .reduce((sum, p) => sum + p.qty * p.price, 0)
                  .toFixed(2),
              ],
            ],
          },
        },
        // {
        //   text: 'Additional Details',
        //   style: 'sectionHeader',
        // },
        // {
        //   text: this.invoice.additionalDetails,
        //   margin: [0, 0, 0, 15],
        // },
        // {
        //   columns: [
        //     [{ qr: `${this.invoice.customerName}`, fit: '50' }],
        //     [{ text: 'Signature', alignment: 'right', italics: true }],
        //   ],
        // },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader',
        },
        {
          ul: [
            'Salesmen, vendors or any other sellers are not allowed to enter the premises.',
            'Owners residing are not allowed to rent their flats for any commercial use as this might create trouble to other society members.',
            'After using the community hall for any event or function it should be cleaned and no damages should be caused.',
            'This is system generated invoice.',
          ],
        },
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15],
        },
      },
    };

    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }

  addProduct() {
    this.invoice.products.push(new Product());
  }
}

import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px auto;
  font-size: 0.9em;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  thead tr {
    background: #965785;
    color: #fff;
    text-align: left;
    font-weight: bold;
    th{
      text-align: center;
    }
  }
  th,
  td {
    padding: 12px 15px;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
    :nth-of-type(even) {
      background: #f3f3f3;
    }
    :last-of-type {
      border-bottom: 2px solid #965785;
    }
  }
  @media (max-width: 959px) {
    width: 100%;
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
    tr {
      border-left: 1px solid #dddddd;
      border-right: 1px solid #dddddd;
      border-top: 1px solid #dddddd;
      border-bottom: none !important;
    }
    td {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 20px;
      :nth-of-type(1) {
        background: #965785;
        color: #fff;
      }
      :first-child {
        text-align: center;
      }
      :before {
        display: inline-block;
        padding-right: 5px;
      }
      :last-child {
        border: none;
      }
    }
    td:nth-of-type(1):before {
      content: "Order ID:";
    }
    td:nth-of-type(2):before {
      content: "Status:";
    }
    td:nth-of-type(3):before {
      content: "Transaction ID:";
    }
    td:nth-of-type(4):before {
      content: "Amount:";
    }
    td:nth-of-type(5):before {
      content: "Dellivery time:";
    }
    td:nth-of-type(6):before {
      content: "Dellivery address:";
    }
    td:nth-of-type(7):before {
      content: "Ordered By:";
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    tbody tr {
      :last-of-type {
        border-bottom: none;
      }
    }
  }
`;

export const TableContainer = styled.div`
  margin: 0 10px;
`;

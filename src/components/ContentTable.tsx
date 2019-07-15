import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Title from "./Title";

interface DataTable {
    title: string;
    headers: string[];
    contents: string[];
}

class ContentTable extends React.Component<DataTable> {
  render() {
    return(
      <Grid item sm={6} md={6} lg={6}>
        <Paper>
          <Title>{this.props.title}</Title>
          <Table>
            <TableBody>
              {this.props.headers.map((value, index) =>
                  <TableRow key={value}>
                    <TableCell component="th" variant="head" scope="row">
                      {value}
                    </TableCell>
                    <TableCell>{this.props.contents[index]}</TableCell>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    );
  }
}

export default ContentTable;

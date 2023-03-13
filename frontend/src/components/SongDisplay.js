import { useState } from "react";
import axios from "axios";
import songs from "../data/songData.json";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function SongDisplay() {
  const [songData, setSongData] = useState(songs);

  console.log(songData);

  return (
    <div>
      <h1>Song Display</h1>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Song Name</TableCell>
              <TableCell align="right">In Spotify</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songData.map((song) => (
              <TableRow key={song._Name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="song">
                  {song._Name}
                </TableCell>
                <TableCell align="right">No</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

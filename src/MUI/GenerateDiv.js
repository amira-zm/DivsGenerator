import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useWindowWidth } from '@wojtekmaj/react-hooks'
import './Dialog.css';

export default function GenerateDiv(props) {
  const w = useWindowWidth();
const h= window.screen.height;
const rapport= w/h;
  const options = [];
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  const [color, setColor] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get('http://localhost:1337/activity-logs/report/41.225.43.102');
      setStart(response.data.map(item => Number(item.start)));
      setEnd(response.data.map(item => Number(item.end)));
      setColor(response.data.map(item => item.color));
    } catch (error) {
      console.log({ error });
    }
  }, [])


  console.log(end);
  console.log(color);
  

  for (var i = 0; i < start.length; i++) {
    options.push(<div className="child1 child2" style={{ marginTop: start[i]*rapport, height:(end[i]-start[i])*rapport, background: color[i] }}></div>)
  }

  return (
    <div>
      {options}
    </div>)

}
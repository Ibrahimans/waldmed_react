import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Card, Col, Container, Row, Table } from "reactstrap";
import { DateRangePicker } from "react-date-range";

const formatReadingTs = (readingTs) => {
  const date = new Date(readingTs);
  return `${date.toLocaleDateString() + " - " + date.toLocaleTimeString()}`;
};

const getWeekAgoDate = () => {
  const _date = new Date();
  const weekAgoDate = _date.getDate() - 7;
  _date.setDate(weekAgoDate);
  return _date;
};

const initialSelectionRange = {
  startDate: getWeekAgoDate(),
  endDate: new Date(),
  key: "selection",
};

export default function Metrics({ readings, selectedEmail }) {
  const [selectionRange, setSelectionRange] = useState(initialSelectionRange);
  const [selectedReadings, setSelectedReadings] = useState([]);

  const handleSelect = (ranges) => {
    const { selection } = ranges;
    setSelectionRange(selection);
  };

  const updateSelectedReadings = (readings, selectionRange) => {
    if (!readings.length) return;
    const startDate = new Date(selectionRange.startDate);
    const endDate = new Date(selectionRange.endDate);
    endDate.setDate(endDate.getDate() + 1);

    const _selectedReadings = readings.filter((reading) => {
      const { readingTs } = reading;
      const readingTime = new Date(readingTs).getTime();
      return (
        readingTime >= startDate.getTime() && readingTime <= endDate.getTime()
      );
    });

    setSelectedReadings(_selectedReadings);
  };

  const getMetrics = () => {
    const SBP = { min: 10000000, max: 0, sum: 0 };
    const DBP = { min: 10000000, max: 0, sum: 0 };
    const HR = { min: 10000000, max: 0, sum: 0 };
    for (const sr of selectedReadings) {
      const { sbp, dbp, heartRate } = sr;
      if (sbp > SBP.max) {
        SBP.max = sbp;
      }
      if (sbp < SBP.min) {
        SBP.min = sbp;
      }
      SBP.sum += sbp;

      if (dbp > DBP.max) {
        DBP.max = dbp;
      }
      if (dbp < DBP.min) {
        DBP.min = dbp;
      }
      DBP.sum += dbp;

      if (heartRate > HR.max) {
        HR.max = heartRate;
      }
      if (heartRate < HR.min) {
        HR.min = heartRate;
      }
      HR.sum += heartRate;
    }
    SBP.avg = parseInt(SBP.sum / selectedReadings.length);
    DBP.avg = parseInt(DBP.sum / selectedReadings.length);
    HR.avg = parseInt(HR.sum / selectedReadings.length);

    return { SBP, DBP, HR };
  };

  useEffect(() => {
    updateSelectedReadings(readings, selectionRange);
  }, [readings, selectionRange]);

  const metrics = getMetrics();

  const customDayContent = (day) => {
    let extraDot;
    const datesAreOnSameDay = (first, second) =>
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate();

    for (const reading of readings) {
      if (datesAreOnSameDay(day, new Date(reading.readingTs))) {
        extraDot = (
          <div
            style={{
              height: "5px",
              width: "5px",
              borderRadius: "100%",
              background: "orange",
              position: "absolute",
              top: 2,
              right: 2,
            }}
          />
        );
      }
    }
    return (
      <div>
        {extraDot}
        <span>{format(day, "d")}</span>
      </div>
    );
  };
  return (
    <Container>
      {Boolean(readings.length) && (
        <Container
          style={{
            fontFamily: "Arial",
          }}
        >
          <Card>
            <Row>
              <Col>
                <DateRangePicker
                  months={2}
                  dayContentRenderer={customDayContent}
                  direction="horizontal"
                  ranges={[selectionRange]}
                  onChange={handleSelect}
                />
              </Col>
              <Col>
                <Card style={{ height: "100%", fontSize: 12 }}>
                  <div style={{ marginLeft: 10 }}>
                    Metrics for <strong>{selectedEmail}</strong>
                  </div>
                  {selectedReadings.length ? (
                    <Container style={{ textAlign: "left" }}>
                      <div style={{ marginTop: 10 }}>
                        No. of Readings:{" "}
                        <strong>{selectedReadings.length}</strong>
                      </div>
                      <div style={{ marginTop: 5 }}>Systolic</div>
                      <ul>
                        <li>Average: {metrics.SBP.avg}</li>
                        <li>Min: {metrics.SBP.min}</li>
                        <li>Max: {metrics.SBP.max}</li>
                      </ul>
                      <div>Diastolic</div>
                      <ul>
                        <li>Average: {metrics.DBP.avg}</li>
                        <li>Min: {metrics.DBP.min}</li>
                        <li>Max: {metrics.DBP.max}</li>
                      </ul>
                      <div>Heart Rate (BPM)</div>
                      <ul>
                        <li>Average: {metrics.HR.avg}</li>
                        <li>Min: {metrics.HR.min}</li>
                        <li>Max: {metrics.HR.max}</li>
                      </ul>
                    </Container>
                  ) : (
                    <Container style={{ textAlign: "left" }}>
                      No Metrics for Range
                    </Container>
                  )}
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      )}
      {Boolean(selectedReadings.length) && (
        <Container style={{ marginTop: 30 }}>
          <Card>
            <Table>
              <thead>
                <tr>
                  <th>Date - Time</th>
                  <th>sbp/dbp</th>
                  <th>Heart Rate</th>
                </tr>
              </thead>
              <tbody>
                {selectedReadings.map((reading) => (
                  <tr>
                    <th scope="row">{formatReadingTs(reading.readingTs)}</th>
                    <td>
                      {reading.sbp}/{reading.dbp}
                    </td>
                    <td>{reading.heartRate} BPM</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Container>
      )}
    </Container>
  );
}

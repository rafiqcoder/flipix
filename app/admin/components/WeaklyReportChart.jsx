"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const weeklyData = [
  { date: "Week 1", admin: 10, album: 20 },
  { date: "Week 2", admin: 15, album: 25 },
  { date: "Week 3", admin: 12, album: 18 },
  { date: "Week 4", admin: 20, album: 30 },
  { date: "Week 5", admin: 18, album: 28 },
  { date: "Week 6", admin: 22, album: 35 },
  { date: "Week 7", admin: 25, album: 40 },
];
// #endregion

export default function WeaklyReportData() {
  return (
    <div className="  w-full font-poppins">
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center mb-4 gap-1 justify-center">
          <div className=" border-1 h-3 w-12 border-[#2fa084f1] bg-[#2fa08452]"></div>
          <p className="text-[#2fa084f1] text-[14px]"># of Admin Created</p>
        </div>
        <div className="flex items-center mb-4 gap-1 justify-center">
          <div className=" border-1 h-3 w-12 border-[#5D1C6A] bg-[#5d1c6a4b]"></div>
          <p className="text-[#5D1C6A] text-[14px]"># of Albums Created</p>
        </div>
      </div>
      <LineChart
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={weeklyData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#ececec7e"
          vertical={false}
        />
        <XAxis dataKey="date" />
        <YAxis width="auto" />
        <Tooltip
          cursor={{
            stroke: "#f4c720",
          }}
          contentStyle={{
            backgroundColor: "var(--color-surface-raised)",
            borderColor: "var(--color-border-2)",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="admin"
          stroke="#5D1C6A"
          strokeWidth={2.5}
          dot={{
            fill: "#5D1C6A",
          }}
          activeDot={{ r: 8, stroke: "var(--color-surface-base)" }}
        />
        <Line
          type="monotone"
          dataKey="album"
          stroke="#2FA084"
          strokeWidth={2}
          dot={{
            fill: "#2FA084",
          }}
          activeDot={{ stroke: "var(--color-surface-base)" }}
        />
        <RechartsDevtools />
      </LineChart>

      <div className="text-center mt-2">
        <h1 className="text-[25px] font-semibold text-[#BFC9D1]">Weakly Reports</h1>
      </div>
    </div>
  );
}

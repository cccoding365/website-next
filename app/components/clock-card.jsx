"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

function getDayOfYear(date) {
	const start = new Date(date.getFullYear(), 0, 0);
	const diff =
		date.getTime() -
		start.getTime() +
		(start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
	const oneDay = 1000 * 60 * 60 * 24;
	return Math.floor(diff / oneDay);
}

function getWeekOfYear(date) {
	const d = new Date(
		Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
	);
	const dayNum = d.getUTCDay() || 7;
	d.setUTCDate(d.getUTCDate() + 4 - dayNum);
	const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

function getDayProgress(date) {
	const now =
		date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
	const total = 24 * 3600;
	return (now / total) * 100;
}

export default function ElectronicClockCard() {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setDate(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	const dayNames = [
		"星期日",
		"星期一",
		"星期二",
		"星期三",
		"星期四",
		"星期五",
		"星期六",
	];

	const dayOfYear = getDayOfYear(date);
	const weekOfYear = getWeekOfYear(date);
	const dayProgress = getDayProgress(date);

	return (
		<Card className="w-full h-full">
			<CardContent className="p-6">
				<div className="text-4xl font-bold mb-4">
					{date.toLocaleTimeString("zh-CN", {
						hour: "2-digit",
						minute: "2-digit",
						hour12: false,
					})}
				</div>
				<div className="text-xl mb-2">
					{dayNames[date.getDay()]}, {date.getFullYear()}年
					{date.getMonth() + 1}月{date.getDate()}日
				</div>
				<div className="text-sm mb-2">
					今年第 {dayOfYear} 天 (第 {weekOfYear} 周)
				</div>
				<div className="text-sm mb-2">
					今日已过: {dayProgress.toFixed(2)}%
				</div>
			</CardContent>
		</Card>
	);
}

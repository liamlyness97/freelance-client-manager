type TimeAgo = ReturnType<typeof timeAgo>;

export default function timeAgo(
    date: Date | string | number,
    now: Date = new Date(),
) {
    const then = new Date(date);
    const diffMs = now.getTime() - then.getTime();

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);

    const positionInMonth = (d: Date) =>
        (((d.getDate() * 24 + d.getHours()) * 60 + d.getMinutes()) * 60 +
            d.getSeconds()) *
            1000 +
        d.getMilliseconds();

    let months =
        (now.getFullYear() - then.getFullYear()) * 12 +
        (now.getMonth() - then.getMonth());

    if (positionInMonth(now) < positionInMonth(then)) {
        months--;
    }

    const years = Math.floor(months / 12);

    return { minutes, hours, days, weeks, months, years };
}

export function formatTimeAgo({
    minutes,
    hours,
    days,
    weeks,
    months,
    years,
}: TimeAgo) {
    const units = [
        { value: years, unit: "year" },
        { value: months, unit: "month" },
        { value: weeks, unit: "week" },
        { value: days, unit: "day" },
        { value: hours, unit: "hour" },
    ];

    const match = units.find((u) => u.value >= 1);
    const value = match ? match.value : Math.max(minutes, 0);
    const unit = match ? match.unit : "minute";

    return {
        value,
        unit,
        label: `${value} ${unit}${value === 1 ? "" : "s"} ago`,
    };
}

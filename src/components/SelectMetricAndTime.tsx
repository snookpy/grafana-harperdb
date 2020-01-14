import React, { ChangeEvent } from 'react';

export interface SelectMetricAndTimeProps {
    selectFields: string[];
    onSelectMetric?: (any) => void;
    onSelectTime?: (any) => void;
}


const SelectMetricAndTime: React.SFC<SelectMetricAndTimeProps> = ({
    selectFields,
    onSelectMetric,
    onSelectTime
}) => {

    const selectMetric = (e: ChangeEvent<HTMLSelectElement>) => {
        onSelectMetric(e.target.value)
    }

    const selectTime = (e: ChangeEvent<HTMLSelectElement>) => {
        onSelectTime(e.target.value)
    }

    const createOptions = (selects, type) => {
        selects = ["", ...selects]

        return selects.map((s, index) => {
            if (s) {
                return <option value={s} key={s + index}>{s}</option>
            } else {
            return <option value={s} key={s + index}>Select {type}</option>
            }
        })
    }

    const style = {
        marginTop: '12px'
    }

    return (
        <div className="gf-form" style={style}>
            <div className="gf-form-label">Select Metric</div>
            <select
                onChange={selectMetric}
            >
                {createOptions(selectFields, "Metric")}
            </select>
            <div className="gf-form-label">Select Time</div>
            <select
                onChange={selectTime}
            >
                {createOptions(selectFields, "Time")}
            </select>
        </div>
    );
}

export default SelectMetricAndTime;
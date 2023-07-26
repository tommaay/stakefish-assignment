import { FC } from "react";

interface DetailsCardProps {
  label: string;
  value: string | number;
}

const DetailsCard: FC<DetailsCardProps> = ({ label, value }) => {
  return (
    <div className="card">
      <p className="details-label">{label}</p>
      <p className="details-value">{value}</p>
    </div>
  );
};

export default DetailsCard;

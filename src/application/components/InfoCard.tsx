import React from 'react';

type Props = {
  title: string;
  onlyText?: boolean;
  children: string;
  iconUrl?: string;
};

const InfoCard = ({ title, onlyText = false, children, iconUrl }: Props) => {
  const firstLetter = children.charAt(0).toUpperCase();

  return (
    <div className="flex flex-col items-start">
      <h2 className="font-bold text-base text-gray-950">{title}</h2>

      <div className='flex items-center gap-2 mt-2'>
        {!onlyText && (
          iconUrl ? (
            <img
                src={iconUrl}
                alt={title}
                className="w-[20px] h-[20px]"
            />
          ) : (
            <div className="flex items-center justify-center w-6 h-6 bg-blue-200 text-white rounded-full text-sm">
              {firstLetter}
            </div>
          )
        )}
          <p className="text-[#88929C]">{children}</p>
      </div>
    </div>
  );
};

export default InfoCard;

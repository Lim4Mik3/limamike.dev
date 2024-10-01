'use client';

import React, { ChangeEvent, useState } from 'react';

type Props = {
  href?: string;
}

export const AssetImageHandler = ({ href }: Props) => {
    const [image, setImage] = useState(href || null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
              const result = reader.result;

              if (typeof result === 'string') {
                setImage(result);
              }
            };

            reader.readAsDataURL(file);
        }
    };

    return (
      <label htmlFor='file-input' className="flex flex-col items-center justify-center border-dashed border-2 border-blue-200 rounded-lg bg-[#F2F8FF] hover:cursor-pointer">
        {image ? (
          <img
            src={image}
            alt="Imagem do ativo"
            className="flex min-h-[226px] min-w-[336px] max-h-[226px] max-w-[336px] rounded-lg object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-[336px]">
            <img src="/Inbox.svg" aria-hidden />

            <p className="text-blue-200">
              Adicionar imagem do Ativo
            </p>
          </div>
        )}
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleFileChange}
          className="invisible w-0 h-0"
        /> 
      </label>  
    );
};

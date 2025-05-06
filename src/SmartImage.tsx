import React from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  srcWebp?: string;
  placeholder?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  srcWebp,
  placeholder,
  alt,
  loading = 'lazy', // 👈 default to lazy if not provided
  ...rest
}) => {
  return (
    <picture>
      {srcWebp && <source srcSet={srcWebp} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        style={{
          filter: placeholder ? 'blur(10px)' : 'none',
          transition: 'filter 0.3s',
        }}
        data-loading={loading}
        {...rest}
      />
    </picture>
  );
};

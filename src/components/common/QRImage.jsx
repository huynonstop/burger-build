import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useClasses } from '../../hooks/useClasses';
import Flex from './Flex';
import Icon from './Icon';
import classes from './qrimage.module.css';
import clipboardLogo from '../../assets/icons8-copy-to-clipboard-100.png';

const QRImage = ({
  className,
  content,
  tooltipPosition = 'Center',
}) => {
  const [qr, setQR] = useState('');
  useEffect(() => {
    QRCode.toDataURL(content, {
      width: 800,
      margin: 2,
    }).then((url) => {
      setQR(url);
    });
  }, []);
  const tooltipPositionClass = classes[tooltipPosition];
  const copyToClipboard = async () => {
    if (qr === '') return;
    try {
      const img = await fetch(qr);
      const imgBlob = await img.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [imgBlob.type]: imgBlob,
        }),
      ]);
      toast.success('Copied to clipboard');
    } catch (err) {
      toast.warn('Copied error');
    }
  };
  return (
    <Flex className={useClasses([classes.QRWarper, className])}>
      {qr ? (
        <>
          <img className={classes.QRImage} alt="qr-img" src={qr} />
          <span
            className={useClasses([
              classes.Tooltip,
              tooltipPositionClass,
            ])}
          >
            <Icon
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard();
              }}
              className={classes.Clipboard}
              src={clipboardLogo}
            />
          </span>
        </>
      ) : (
        <div className={classes.Placeholder}></div>
      )}
    </Flex>
  );
};

export default QRImage;

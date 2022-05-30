import classes from './loader.module.css';
const Loader = () => {
  return (
    <div className={classes.LoaderWarper}>
      <i className={classes.Loader} />
    </div>
  );
};

export default Loader;

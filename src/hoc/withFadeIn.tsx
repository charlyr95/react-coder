import { motion } from "framer-motion";

const withFadeIn = (WrappedComponent) => {
    return (props) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <WrappedComponent {...props} />
        </motion.div>
    );
};

export default withFadeIn;
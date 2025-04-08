import Button from '@/ui/button/Button';
import React from 'react'
interface PropsI {
    closeModal: () => void;
}
const PredictionModalForm = ({ closeModal }: PropsI) => {

    return (
        <div>
            <div className="flex items-center gap-5 p-4 md:p-5 border-t border-green-3 rounded-b">
                <Button
                    title='Save'
                // onClick={handleSubmit(onSubmit)}

                />
                <Button
                    onClick={closeModal}
                    title='Cancel'
                    secondary={true}
                />
            </div>
        </div>
    )
}

export default PredictionModalForm
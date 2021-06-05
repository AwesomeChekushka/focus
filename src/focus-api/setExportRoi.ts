import FocusConfig from '../types/FocusConfig'
import config from './config'
import ExportRoi from '../export-roi/types/ExportRoi'
import ExportRoiLabel from '../types/ExportRoiLabel'
import getExportRoi from '../export-roi/getExportRoi'

const internalSetExportRoi = (exportRoi: ExportRoi): FocusConfig => {
  const configObj = config()
  configObj.exportRoi = exportRoi

  return config(configObj)
}

const setExportRoiByLabel = async (
  label: ExportRoiLabel,
): Promise<FocusConfig> => {
  return internalSetExportRoi(await getExportRoi(label))
}

const setExportRoi = (
  exportRoi: ExportRoiLabel | ExportRoi,
): Promise<FocusConfig> => {
  if (typeof exportRoi === 'string') {
    return setExportRoiByLabel(exportRoi)
  }

  return Promise.resolve(internalSetExportRoi(exportRoi))
}

export default setExportRoi
